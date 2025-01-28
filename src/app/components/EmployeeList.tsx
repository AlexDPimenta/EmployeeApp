"use client";
import React from "react";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phones: string[];
  docNumber: number;
  role: number;
  birthDate: string;
  managerName: string;
}

interface EmployeeListProps {
  employees: Employee[];
  onDeleteEmployee: (id: number) => void;
}

export default function EmployeeList({ employees, onDeleteEmployee }: EmployeeListProps) {
  return (
    <div className="mt-6">
      <h4 className="text-xl font-bold mb-4">Employee List</h4>
      {employees.length === 0 ? (
        <p className="text-gray-500">No employees found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">First Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Last Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Phones</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Doc Number</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Role</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Birth Date</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Manager Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-200 px-4 py-2">{employee.firstName}</td>
                  <td className="border border-gray-200 px-4 py-2">{employee.lastName}</td>
                  <td className="border border-gray-200 px-4 py-2">{employee.email}</td>
                  <td className="border border-gray-200 px-4 py-2">{employee.phones.join(", ")}</td>
                  <td className="border border-gray-200 px-4 py-2">{employee.docNumber}</td>
                  <td className="border border-gray-200 px-4 py-2">{employee.role === 1 ? "Employee" : employee.role === 2 ? "Leader" : "Director"}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    {new Date(employee.birthDate).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {employee.managerName || "N/A"}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <button
                      className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                      onClick={() => onDeleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
