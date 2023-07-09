import SemiHeader from '@/UI/SemiHeader';
import DepartmentCard from '@/components/DepartmentCard';
import React from 'react';
const departments = [
  'Education',
  'Agriculture',
  'ICT',
  'Manufacture',
  'Research',
  'Creative Economy',
  'Entertainment',
  'Sports Development',
  'Transportation',
  'Housing',
  'Urban Plan',
  'Media',
  'Healthcare',
  'Mining',
  'Tourism',
];
const Department = () => {
  return (
    <div className="bg-[#1b1b1b] min-h-screen py-[100px]">
      <SemiHeader>Departments</SemiHeader>
      <div className="w-[98%] sm:w-[95%] md:w-[75%] lg:w-[60%] mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {departments.map((department) => (
          <DepartmentCard key={department} item={department} />
        ))}
      </div>
    </div>
  );
};

export default Department;
