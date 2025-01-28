"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchEmployees, deleteEmployee as deleteEmployeeService } from "../../services/api";
import EmployeeList from "./EmployeeList";

export default function EmployeeManager() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees(); 
  }, []);

  const getEmployees = async () => {
    try {
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const deleteEmployee = async (id: number) => {
    try {
      await deleteEmployeeService(id);
      setEmployees(employees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Employee Manager</h1>
      <Link href="/employee/add">
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition mb-4">
          Add New Employee
        </button>
      </Link>
      <EmployeeList employees={employees} onDeleteEmployee={deleteEmployee} />
    </div>
  );
}
