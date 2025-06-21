import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaExternalLinkAlt,
  FaTrashAlt,
  FaSortAmountDownAlt,
} from "react-icons/fa";

function AdminPanel() {
  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    const data = [
      {
        id: 1,
        type: "contact",
        fullName: "John Doe",
        email: "john@example.com",
        phone: "(555) 123-4567",
        subject: "Transport Inquiry",
        message: "Need shipment details...",
        admin: "Ansh",
        submittedAt: "2025-06-21 10:00 AM",
        status: "pending",
      },
      {
        id: 2,
        type: "quote",
        fullName: "Alice Smith",
        email: "client@abc.com",
        phone: "(555) 789-1234",
        subject: "Quote for equipment move",
        message: "Looking for flatbed options",
        admin: "Ansh",
        submittedAt: "2025-06-21 10:30 AM",
        status: "replied",
      },
    ];
    setAllSubmissions(data);
  }, []);

  const filteredList = allSubmissions
    .filter((item) => {
      const matchSearch =
        item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = filter === "all" || item.status === filter;
      const matchType = typeFilter === "all" || item.type === typeFilter;
      const itemDate = new Date(item.submittedAt);
      const matchStartDate = startDate ? new Date(startDate) <= itemDate : true;
      const matchEndDate = endDate ? itemDate <= new Date(endDate) : true;
      return matchSearch && matchStatus && matchType && matchStartDate && matchEndDate;
    })
    .sort((a, b) => {
      const dateA = new Date(a.submittedAt);
      const dateB = new Date(b.submittedAt);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  const updateStatus = (id) => {
    const updated = allSubmissions.map((item) =>
      item.id === id ? { ...item, status: "replied" } : item
    );
    setAllSubmissions(updated);
  };

  const handleMail = (email) => {
    window.location.href = `mailto:${email}?subject=Response from Admin&bcc=info@xtransport.ca`;
  };

  const handleDelete = (id) => {
    const updated = allSubmissions.filter((item) => item.id !== id);
    setAllSubmissions(updated);
    setSelectedSubmission(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 flex-wrap">
        <div className="flex gap-3 flex-wrap">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-blue-500 text-blue-700 bg-white px-4 py-2 rounded-lg text-sm shadow-sm"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="replied">Replied</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-blue-500 text-blue-700 bg-white px-4 py-2 rounded-lg text-sm shadow-sm"
          >
            <option value="all">All Types</option>
            <option value="contact">Contact</option>
            <option value="quote">Quote</option>
          </select>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded-lg text-sm bg-white text-gray-800"
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded-lg text-sm bg-white text-gray-800"
          />

          <button
            onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
            className="border border-gray-400 text-gray-700 bg-white px-4 py-2 rounded-lg text-sm shadow-sm flex items-center"
          >
            <FaSortAmountDownAlt className="mr-2" />
            Sort: {sortOrder === "asc" ? "Oldest" : "Newest"}
          </button>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full border border-blue-300 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-800 text-white text-left text-sm">
          <tr>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Subject</th>
            <th className="px-4 py-3">Submitted At</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Mail Back</th>
            <th className="px-4 py-3">Mark as Replied</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {filteredList.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3 capitalize">{item.type}</td>
              <td className="px-4 py-3">{item.fullName}</td>
              <td className="px-4 py-3">{item.email}</td>
              <td className="px-4 py-3">{item.phone}</td>
              <td
                className="px-4 py-3 text-blue-600 cursor-pointer hover:underline"
                onClick={() => setSelectedSubmission(item)}
              >
                {item.subject}{" "}
                <FaExternalLinkAlt className="inline text-xs ml-1" />
              </td>
              <td className="px-4 py-3">{item.submittedAt}</td>
              <td className="px-4 py-3">
                {item.status === "pending" ? (
                  <span className="text-yellow-600 flex items-center">
                    <FaClock className="mr-1" /> Pending
                  </span>
                ) : (
                  <span className="text-green-600 flex items-center">
                    <FaCheckCircle className="mr-1" /> Replied
                  </span>
                )}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => handleMail(item.email)}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
                >
                  Mail Back
                </button>
              </td>
              <td className="px-4 py-3">
                {item.status === "pending" && (
                  <button
                    onClick={() => updateStatus(item.id)}
                    className="ml-2 bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded"
                  >
                    Mark as Replied
                  </button>
                )}
              </td>
            </tr>
          ))}
          {filteredList.length === 0 && (
            <tr>
              <td colSpan="9" className="px-4 py-6 text-center text-gray-500">
                No matching requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedSubmission(null)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2 text-blue-800">
              {selectedSubmission.subject}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Type:</strong> {selectedSubmission.type}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Name:</strong> {selectedSubmission.fullName}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Email:</strong> {selectedSubmission.email}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Phone:</strong> {selectedSubmission.phone}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Status:</strong>{" "}
              <span
                className={
                  selectedSubmission.status === "replied"
                    ? "text-green-600"
                    : "text-yellow-600"
                }
              >
                {selectedSubmission.status}
              </span>
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Submitted:</strong> {selectedSubmission.submittedAt}
            </p>
            <div className="mt-3 p-3 bg-gray-100 rounded text-sm text-gray-800 whitespace-pre-wrap">
              {selectedSubmission.message}
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => handleDelete(selectedSubmission.id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded flex items-center"
              >
                <FaTrashAlt className="mr-2" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
