// import React, { createContext, useState, useEffect } from "react";

// export const UserContext = createContext();

// export function UserContextProvider({ children }) {
//   const [userInfo, setUserInfo] = useState(null);
//   const API_URL = import.meta.env.VITE_API_BASE_URL;
//   const API_AUTH = import.meta.env.VITE_AUTH_SERVICE_URL;


//   // Fetch user data when the component mounts
//   useEffect(() => {
//     fetch(`${API_AUTH}/api/auth/profile`, {
//       credentials: 'include',
//     })
//       .then(response => response.json())
//       .then(userInfo => {
//         console.log('Fetched user info from context:', userInfo);
//         setUserInfo(userInfo);
//       })
//       .catch(error => {
//         console.error('Error fetching user info:', error);
//       });
//   }, []);

//   return (
//     <UserContext.Provider value={{ userInfo, setUserInfo }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// import React, { createContext, useState, useEffect } from "react";

// export const UserContext = createContext();

// export function UserContextProvider({ children }) {
//   const [userInfo, setUserInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const API_AUTH = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//   const token = localStorage.getItem("accesstoken");

//   fetch(`${API_AUTH}/api/users/me`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then(res => res.json())
//     .then(data => {
//       setUserInfo(data?.data); // Assuming your backend sends { data: { userInfo } }
//       console.log("Fetched user info:", data?.data);
//     })
//     .catch(err => {
//       console.error("Error fetching user profile", err);
//     });
//   }, []);

//   return (
//     <UserContext.Provider value={{ userInfo, setUserInfo, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_AUTH = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_AUTH}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        });

        const data = await response.json();
        setUserInfo(data?.data || null);
        console.log("Fetched user info:", data?.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setUserInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, loading }}>
      {children}
    </UserContext.Provider>
  );
}
