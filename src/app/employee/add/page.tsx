"use client";
import React from "react";
import EmployeeForm from "../../components/EmployeeForm";
import { CreateEmployee as CreateEmployee } from "@/services/api";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddEmployeePage() {
  const router = useRouter();

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Add New Employee</h1>
      <EmployeeForm
        onAddEmployee={async (newEmployee) => {
          const formattedEmployee = {
            ...newEmployee,
            role: Number(newEmployee.role),
            docNumber: Number(newEmployee.docNumber),
          };

          try {
            const response = await CreateEmployee(formattedEmployee);            
            if (response.status === 201) {
              console.log('status', response.status);
              toast.success("Employee added successfully", {
                onClose: () => router.push("/"),
              });
            }else{
              toast.error("Error adding employee");
            }                     
           
          } catch (error) {
            toast.error("Error adding employee");
            console.error("Error:", error);
          }
        }}
      />
      <ToastContainer />
    </div>
  );
}
