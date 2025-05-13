import React from 'react';

const StudentDetails = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Close student details"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Course:</strong> {student.course}</p>
          {/* Add more student details here if needed */}
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
