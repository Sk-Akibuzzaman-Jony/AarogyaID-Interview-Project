import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  // Get user data from the Redux store
  const user = useSelector(state => state.profile.user);

  return (
    <div className="w-8/12 mx-auto mt-10">
      <div className="text-richblack-900 font-bold text-3xl pb-14">Dashboard</div>
      {user && (
        <div className="bg-richblue-25 p-10 rounded-lg mb-10">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={user.image} className="h-20 w-20 rounded-full mr-10" alt="User" />
              <div>
                <div className="font-bold text-richblack-900 text-2xl">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-base text-richblack-500">{user.email}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {user && (
        <div className="bg-richblue-25 p-10 rounded-lg mb-14">
          <div className="flex justify-between">
            <div className="text-richblack-900 font-bold text-2xl pb-5">Personal Details</div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="text-richblack-700">First Name</div>
              <div className="font-bold text-xl text-richblack-800">{user.firstName}</div>
            </div>
            <div>
              <div className="text-richblack-700">Last Name</div>
              <div className="font-bold text-xl text-richblack-800">{user.lastName}</div>
            </div>
            <div>
              <div className="text-richblack-700">Email</div>
              <div className="font-bold text-lg text-richblack-500">{user.email}</div>
            </div>
          </div>
          
        </div>
      )}
      {user && user.accountType === 'Doctor' && user.healthcareProfessionalType && (
        <div className="bg-richblue-25 p-10 rounded-lg mb-14">
          <div className="flex justify-between">
            <div className="text-richblack-900 font-bold text-2xl pb-5">Professional Details</div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="text-richblack-700">Healthcare Professional Type</div>
              <div className="font-bold text-xl text-richblack-800">{user.healthcareProfessionalType}</div>
            </div>
            <div>
              <div className="text-richblack-700">Healthcare Subcategory</div>
              <div className="font-bold text-xl text-richblack-800">{user.healthcareSubcategory}</div>
            </div>
            {user.healthcareProfessionalID && (
              <div>
                <div className="text-richblack-700">Healthcare Professional ID</div>
                <div className="font-bold text-xl text-richblack-800">{user.healthcareProfessionalID}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
