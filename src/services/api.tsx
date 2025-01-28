import axios, { AxiosError } from 'axios';
import { handleError } from './errorHandler';
import { CreateEmployeeRequest } from '@/models/CreateEmployeRequest';

const api = axios.create({
    baseURL: 'https://localhost:51985',
});

 export const fetchEmployees = async () => {
    const response = await api.get("/api/employees");
    return response.data;
  };
  
 export const addEmployee = async (newEmployee: {
    firstName: string;
    lastName: string;
    email: string;
    phones: string[];
    docNumber: number;
    role: number;
    birthDate: string;
    managerName: string;
    password: string;
  }) => {   
    try {
      const response = await api.post("/api/employees", newEmployee);
      return response.data;
    } catch (error) {               
        return await handleError(error as AxiosError);
    }     
  };

  export async function CreateEmployee(createEmployee: CreateEmployeeRequest){
    try {
      const response = await api.post('/api/employees', createEmployee);
      return response;
    } catch (error) {
      return await handleError(error as AxiosError);
    }
  }

    
  export const deleteEmployee = async (id: number) => {
    await api.delete(`/api/employees/${id}`);
  };