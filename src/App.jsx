import { useState, useEffect } from 'react';
import axios from './api/mockApi';
import Header from './components/Header';
import StudentList from './components/StudentList';
import FilterCourse from './components/FilterCourse';
import AddStudentForm from './components/AddStudentForm';
import Login from './components/Login';
import Logout from './components/Logout';
import StudentDetails from './components/StudentDetails';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);
  const [filterCourse, setFilterCourse] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Failed to fetch students:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now(), grade: 'N/A' }]);
    setShowAddForm(false);
  };

  const handleSelectStudent = (student) => {
    if (!user) {
      alert('Please login to view student details.');
      return;
    }
    setSelectedStudent(student);
  };

  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme classes based on dark mode state
  const themeClasses = darkMode ? 
    'bg-gray-900 text-white transition-colors duration-300' : 
    'bg-gray-50 text-gray-900 transition-colors duration-300';

  const filteredStudents = filterCourse 
    ? students.filter(student => 
        student.course.toLowerCase().includes(filterCourse.toLowerCase())
      )
    : students;

  return (
    <div className={`min-h-screen flex flex-col ${themeClasses}`}>
      <Header 
        user={user} 
        setUser={setUser} 
        darkMode={darkMode} 
        toggleDarkMode={handleToggleDarkMode} 
      />

      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Dashboard Controls */}
        <div className={`mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } p-4 rounded-lg shadow-md`}>
          <FilterCourse 
            setFilterCourse={setFilterCourse} 
            darkMode={darkMode} 
          />
          
          {/* Add Student Button (only if logged in) */}
          {user && (
            <button
              onClick={() => setShowAddForm(true)}
              className={`flex items-center justify-center space-x-1 px-4 py-2 rounded-md ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Student</span>
            </button>
          )}
        </div>

        {!user ? (
          <Login setUser={setUser} darkMode={darkMode} />
        ) : (
          <div className="mb-4 flex justify-between items-center">
            <Logout setUser={setUser} darkMode={darkMode} />
            <span className={`ml-4 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Welcome, {user.displayName || user.email}
            </span>
          </div>
        )}

        <StudentList
          filterCourse={filterCourse}
          students={filteredStudents}
          onSelectStudent={handleSelectStudent}
          loading={loading}
          darkMode={darkMode}
        />

        {showAddForm && (
          <AddStudentForm 
            addStudent={addStudent} 
            onClose={() => setShowAddForm(false)} 
            darkMode={darkMode} 
          />
        )}

        {selectedStudent && user && (
          <StudentDetails
            student={selectedStudent}
            onClose={handleCloseDetails}
            darkMode={darkMode}
          />
        )}
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;