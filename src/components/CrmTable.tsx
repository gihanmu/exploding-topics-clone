"use client";
import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Phone, Mail, RefreshCw, Zap, Users, Link2, Table, Database, Edit, Trash2, GripVertical } from "lucide-react";
import { toast } from "sonner";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

// Contact type
type Contact = {
  id: number;
  email: string;
  name: string;
  avatar: string | null;
  phone: string;
  provider: string;
};

// Initial data
const initialData: Contact[] = [
  { id: 1, email: "parth@volley.com", name: "Parth Patel", avatar: null, phone: "", provider: "salesforce" },
  { id: 2, email: "lou@insidescaling.com", name: "Justin Petrossi", avatar: null, phone: "", provider: "salesforce" },
  { id: 3, email: "salesops@meter.com", name: "Xiaohan Zhu", avatar: null, phone: "", provider: "salesforce" },
  { id: 4, email: "nick@vivesa.com", name: "Nick Thomas", avatar: null, phone: "", provider: "salesforce" },
  { id: 5, email: "a.ford@nullab.com", name: "Addie Ford", avatar: null, phone: "", provider: "salesforce" },
];

// Simulate enrichment (fill missing avatar/phone)
function enrichContacts(contacts: Contact[]): Contact[] {
  return contacts.map((c) => ({
    ...c,
    avatar: !c.avatar ? `https://unavatar.io/${c.email}` : c.avatar,
    phone: !c.phone ? `(${Math.floor(Math.random()*900+100)}) ${Math.floor(Math.random()*900+100)}-${Math.floor(Math.random()*9000+1000)}` : c.phone,
  }));
}

const columnHelper = createColumnHelper<Contact>();

export function CrmTable() {
  // State for contacts
  const [contacts, setContacts] = useState<Contact[]>([]);
  // Modal state
  const [editing, setEditing] = useState<Contact|null>(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", phone: "", avatar: "" });

  // Enrich on mount
  useEffect(() => {
    setContacts(enrichContacts(initialData));
  }, []);

  // Table columns
  const columns = [
    columnHelper.display({
      id: "drag",
      header: "",
      cell: () => <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />,
      size: 24,
    }),
    columnHelper.accessor("id", {
      header: "#",
      cell: info => info.getValue(),
      size: 32,
    }),
    columnHelper.accessor("email", {
      header: () => (
        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <Mail className="w-4 h-4 text-blue-500" /> Imported Contacts
        </div>
      ),
      cell: info => (
        <div className="flex items-center gap-2">
          <Database className="w-6 h-6 text-blue-500 bg-white rounded-full border" />
          <span className="font-medium text-gray-900">{info.getValue()}</span>
        </div>
      ),
    }),
    columnHelper.accessor("name", {
      header: () => (
        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <User className="w-4 h-4 text-blue-500" /> Find Profiles
        </div>
      ),
      cell: info => {
        const original = info.row.original as Contact;
        return (
          <div className="flex items-center gap-2">
            {original.avatar ? (
              <img src={original.avatar} alt={info.getValue()} className="w-7 h-7 rounded-full" />
            ) : (
              <Users className="w-6 h-6 text-blue-400" />
            )}
            <span className="font-medium text-gray-900">{info.getValue()}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("phone", {
      header: () => (
        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <Phone className="w-4 h-4 text-blue-500" /> Find Phones
        </div>
      ),
      cell: info => <span className="text-gray-700">{info.getValue()}</span>,
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: info => {
        const contact = info.row.original;
        return (
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => onEdit(contact)}><Edit className="w-4 h-4 mr-1" />Edit</Button>
            <Button size="sm" variant="destructive" onClick={() => onDelete(contact)}><Trash2 className="w-4 h-4 mr-1" />Delete</Button>
          </div>
        );
      },
    }),
  ];

  // Table instance
  const table = useReactTable<Contact>({
    data: contacts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Edit handlers
  function onEdit(contact: Contact) {
    setEditForm({ name: contact.name, email: contact.email, phone: contact.phone, avatar: contact.avatar ?? "" });
    setEditing(contact);
  }
  function onEditChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }
  function onEditSave() {
    if (!editing) return;
    setContacts(cs => cs.map(c => c.id === editing.id ? { ...c, ...editForm } : c));
    setEditing(null);
    toast.success("Contact updated");
  }
  function onEditCancel() {
    setEditing(null);
  }

  // Delete handler
  function onDelete(contact: Contact) {
    setContacts(cs => cs.filter(c => c.id !== contact.id));
    toast.error("Contact deleted");
  }

  // Dedupe handler (simulate dedupe and enrich)
  function handleDedupe() {
    setContacts(cs => enrichContacts(cs));
    toast.success("Deduplication and enrichment complete!");
  }
  // Enrichment handler
  function handleEnrichment() {
    setContacts(cs => enrichContacts(cs));
    toast.success("Enrichment complete!");
  }
  // Hierarchy handler
  function handleHierarchy() {
    toast.success("Parent-child hierarchy set!");
  }
  // Real-time updates handler
  function handleRealtime() {
    toast.success("Real-time updates enabled!");
  }

  // Drag-and-drop
  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    const reordered = Array.from(contacts);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setContacts(reordered);
  }

  return (
    <section className="py-16 px-2 md:px-0 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Table className="w-6 h-6 text-blue-600" /> CRM Enrichment & Sync
          </h2>
          <Button variant="outline" className="flex items-center gap-2" onClick={handleDedupe}>
            <Link2 className="w-4 h-4" /> Dedupe contacts
          </Button>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="crm-table-body" direction="vertical">
              {(provided) => (
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50">
                    {table.getHeaderGroups().map(headerGroup => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                          <th
                            key={header.id}
                            className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"
                            style={{ width: header.getSize() }}
                          >
                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody ref={provided.innerRef} {...provided.droppableProps}>
                    {table.getRowModel().rows.map((row, idx) => (
                      <Draggable key={row.id} draggableId={row.id.toString()} index={idx}>
                        {(draggableProvided, snapshot) => (
                          <tr
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            className={
                              "hover:bg-gray-50 " +
                              (snapshot.isDragging ? "bg-blue-50" : "")
                            }
                          >
                            {row.getVisibleCells().map((cell, cellIdx) => (
                              <td
                                key={cell.id}
                                className="px-4 py-3 border-b border-gray-100"
                                {...(cellIdx === 0 ? draggableProvided.dragHandleProps : {})}
                              >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </td>
                            ))}
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                </table>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-6">
          <Button variant="secondary" className="flex items-center gap-2" onClick={handleEnrichment}>
            <Zap className="w-4 h-4" /> 90+ enrichment providers
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={handleHierarchy}>
            <Users className="w-4 h-4" /> Set parent-child hierarchies
          </Button>
          <Button variant="ghost" className="flex items-center gap-2" onClick={handleRealtime}>
            <RefreshCw className="w-4 h-4" /> Real-time updates
          </Button>
          <span className="ml-auto text-sm text-gray-500 flex items-center gap-1 mt-2 md:mt-0">
            Auto-update <RefreshCw className="w-4 h-4 animate-spin text-green-500" />
          </span>
        </div>
      </div>
      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Edit className="w-5 h-5" /> Edit Contact</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input name="name" value={editForm.name} onChange={onEditChange} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input name="email" value={editForm.email} onChange={onEditChange} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input name="phone" value={editForm.phone} onChange={onEditChange} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Avatar URL</label>
                <Input name="avatar" value={editForm.avatar ?? ""} onChange={onEditChange} />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={onEditCancel}>Cancel</Button>
              <Button onClick={onEditSave}>Save</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 