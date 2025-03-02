# Clinic Management System

The **Clinic Management System** is a web-based application designed to streamline operations in a clinic. It facilitates seamless interaction between receptionists and doctors while managing patient records, prescriptions and billing. The system is built with **HTML**, **CSS**, **JavaScript** and leverages **Firebase** for backend services.

---

## Architecture

### 1. Frontend (Client-Side Application)
The client-side application is responsible for user interaction and comprises the following modules:
- **Receptionist Module:**
  - Register patients with personal details.
  - System assigns sequential token numbers to the patients.
  - Generate bills.
  - View patient records.
- **Doctor Module:**
  - Access patient details using token numbers.
  - Add prescriptions and symptoms for patients.
  - View patient medical history for informed decision-making.
- **Shared Features:**
  - Both receptionist and doctor can view patient history.

### 2. Backend (Firebase Services)
The system uses Firebase for backend services:
- **Firebase Authentication:**
  - Manages user roles (Receptionist, Doctor).
  - Secures data access and ensures role-based permissions.
- **Firebase Firestore (Database):**
  - Stores:
    - Patient information (name, age, address, contact details and token numbers).
    - Prescriptions (symptoms and medicines added by doctors).
    - Billing information.
  - Provides real-time updates for seamless interaction between the receptionist and doctor.
- **Firebase Hosting:**
  - Hosts the web application, ensuring global availability and fast response times.

---

## Workflow
<img width="561" alt="Workflow" src="https://github.com/user-attachments/assets/13602891-b69a-410c-ae90-71bcb7a111d3" />


### 1. Patient Registration (Receptionist)
- Receptionist enters patient details into the system.
- A sequential token number is assigned to the patient by the system.
- The patient record is stored in Firestore.

### 2. Prescription Entry (Doctor)
- Doctor accesses patient records by token number.
- Adds symptoms and prescriptions to the patient’s history.
- Updates are saved in Firestore and synchronized in real-time.

### 3. Bill Creation (Receptionist)
- Receptionist generates a bill.
- Amount is recorded and the bill is stored in Firestore.

### 4. View Patient History
- Both the receptionist and doctor can view patient history.
- History is fetched from Firestore for easy tracking of past visits.

---

## Illustrations

Home Page: Login
<img width="960" alt="Screenshot 2025-01-16 050058" src="https://github.com/user-attachments/assets/cb309674-ba78-4566-9f46-8e9db44fac87" />

Home Page: Registeration
<img width="960" alt="Screenshot 2025-01-16 050112" src="https://github.com/user-attachments/assets/29e61c5c-7d9e-4927-a2e4-128bdf26e440" />

Receptionist Registration
<img width="960" alt="Screenshot 2025-01-16 050141" src="https://github.com/user-attachments/assets/1c6de633-29b8-40e2-9541-9d816416b426" />

Receptionist Registration Success Confirmation
<img width="960" alt="Screenshot 2025-01-16 050156" src="https://github.com/user-attachments/assets/78270e1f-fbdc-4647-a8b5-a0c12e3e83c8" />

Receptionist Login
<img width="960" alt="Screenshot 2025-01-16 050222" src="https://github.com/user-attachments/assets/489a28d0-361c-4bdb-b697-b94fd3e41b81" />

Adding First Patient Details
<img width="960" alt="Screenshot 2025-01-16 050328" src="https://github.com/user-attachments/assets/10a20e07-f129-420a-aeca-48a3035d7794" />

Successful Addition of First Patient and System Token Generation
<img width="960" alt="Screenshot 2025-01-16 050350" src="https://github.com/user-attachments/assets/52531011-12f7-4917-958f-a343e6c19667" />

Selecting First Patient for Bill Generation
<img width="960" alt="Screenshot 2025-01-16 050434" src="https://github.com/user-attachments/assets/bebd5625-b002-41b4-8a58-f7c9d66cc141" />

First Patient Bill Generation Amount
<img width="960" alt="Screenshot 2025-01-16 050452" src="https://github.com/user-attachments/assets/cc7e4746-0b30-4c0d-b567-0e163683ae22" />

Successful Bill Generation of First Patient
<img width="960" alt="Screenshot 2025-01-16 050507" src="https://github.com/user-attachments/assets/fa3aa5a3-e54b-4be8-ab10-2633b623dad1" />

Adding Second Patient Details
<img width="960" alt="Screenshot 2025-01-16 050632" src="https://github.com/user-attachments/assets/00d81b16-a7d6-483c-90a6-0e6740d31876" />

Successful Addition of Second Patient and System Token Generation
<img width="960" alt="Screenshot 2025-01-16 050649" src="https://github.com/user-attachments/assets/ac2bf7d1-705a-47cc-9cbb-88c0d361b53d" />

Selecting Second Patient for Bill Generation
<img width="960" alt="Screenshot 2025-01-16 050708" src="https://github.com/user-attachments/assets/541214dd-4aa4-4c31-89ad-f8a7288d2d67" />

Second Patient Bill Generation Amount
<img width="960" alt="Screenshot 2025-01-16 050731" src="https://github.com/user-attachments/assets/86286903-d22a-4a1a-9c80-5d9c8c845fbb" />

Successful Bill Generation of Second Patient
<img width="960" alt="Screenshot 2025-01-16 050745" src="https://github.com/user-attachments/assets/082ab65c-9d24-4974-992e-f534406e6751" />

Receptionist Logout
<img width="960" alt="Screenshot 2025-01-16 050816" src="https://github.com/user-attachments/assets/22d4bf7b-4e32-4648-a9d0-cf3f248df24c" />

Doctor Registration
<img width="960" alt="Screenshot 2025-01-16 050854" src="https://github.com/user-attachments/assets/1f7a2b5e-2666-4618-a303-42b780f48cbf" />

Doctor Registration Success Confirmation
<img width="960" alt="Screenshot 2025-01-16 050911" src="https://github.com/user-attachments/assets/83b4f0b7-4996-4b4f-b491-952a95534e72" />

Doctor Login
<img width="960" alt="Screenshot 2025-01-16 050937" src="https://github.com/user-attachments/assets/ac4cc1c6-f7dd-4f67-bb0e-95aded12c2e9" />

Doctor's Add Prescription Page
<img width="960" alt="Screenshot 2025-01-16 050958" src="https://github.com/user-attachments/assets/c01477c5-1d0f-4e88-8fb4-265f6aa2462e" />

Doctor Selecting First Patient to Add Prescription
<img width="960" alt="Screenshot 2025-01-16 051023" src="https://github.com/user-attachments/assets/0ccc8224-3952-4191-8f47-b3e3888ffe63" />

Doctor Adding First Patient's Prescription
<img width="960" alt="Screenshot 2025-01-16 051118" src="https://github.com/user-attachments/assets/c15c384e-2d39-48e9-b24c-66dd1b84fbbd" />

Confirmation for Adding First Patient's Prescription
<img width="960" alt="Screenshot 2025-01-16 051151" src="https://github.com/user-attachments/assets/471a47e3-8a11-4257-9775-f8057ec45ab8" />

Doctor Selecting Second Patient to Add Prescription
<img width="960" alt="Screenshot 2025-01-16 051315" src="https://github.com/user-attachments/assets/0cf8f1f4-e0a5-4ac6-851e-fc60bf1bd72b" />

Doctor Adding Second Patient's Prescription
<img width="960" alt="Screenshot 2025-01-16 051400" src="https://github.com/user-attachments/assets/a52f1b99-e570-42c0-9184-76926106e6a0" />

Confirmation for Adding Second Patient's Prescription
<img width="960" alt="Screenshot 2025-01-16 051414" src="https://github.com/user-attachments/assets/6c88616d-2e72-4190-a957-627471b45320" />

Doctor's View Patient History Page
<img width="960" alt="Screenshot 2025-01-16 051215" src="https://github.com/user-attachments/assets/a126d346-7b00-4837-b88b-a892f008d999" />

Doctor Selecting First Patient to View Patient History
<img width="960" alt="Screenshot 2025-01-16 051236" src="https://github.com/user-attachments/assets/21fb7618-c900-4bfb-bfda-001d314585bf" />

Doctor's View of First Patient History
<img width="960" alt="Screenshot 2025-01-16 051255" src="https://github.com/user-attachments/assets/041aec57-5b75-466e-901a-8d9be4f790ef" />

Doctor Selecting Second Patient to View Patient History
<img width="960" alt="Screenshot 2025-01-16 051436" src="https://github.com/user-attachments/assets/789b6389-1ac2-4bdb-b457-c8186e5f40d1" />

Doctor's View of Second Patient History
<img width="960" alt="Screenshot 2025-01-16 051452" src="https://github.com/user-attachments/assets/b299feda-5f00-4aff-adff-79fa2bd32b6e" />

Doctor Logout
![image](https://github.com/user-attachments/assets/d397873d-fb7b-49ce-9c8c-12fb0ce7f2d8)

Receptionist's View Patient History Page
<img width="960" alt="Screenshot 2025-01-16 050408" src="https://github.com/user-attachments/assets/f35af08e-c71d-40ef-b129-a2a83865acb3" />

Receptionist Selecting First Patient to View Patient History
<img width="960" alt="Screenshot 2025-01-16 051600" src="https://github.com/user-attachments/assets/b0145328-b14b-4d15-95df-c50221feff52" />

Receptionist's View of First Patient History
<img width="960" alt="Screenshot 2025-01-16 051615" src="https://github.com/user-attachments/assets/4dc10255-e3de-45ae-958f-de32387aa05b" />

Receptionist Selecting Second Patient to View Patient History
<img width="960" alt="Screenshot 2025-01-16 051656" src="https://github.com/user-attachments/assets/d02e2714-b3d8-4c1a-a2cf-2437ee498b1c" />

Receptionist's View of Second Patient History
<img width="960" alt="Screenshot 2025-01-16 051642" src="https://github.com/user-attachments/assets/a6ede0cf-f4ce-4d75-8f25-cef279d160eb" />

Receptionist Logout
<img width="960" alt="Screenshot 2025-01-16 051710" src="https://github.com/user-attachments/assets/3e35dd28-10a2-410f-ab04-4857a67b9ff1" />

Firebase User Authentication
<img width="960" alt="Screenshot 2025-01-16 052102" src="https://github.com/user-attachments/assets/2e5fa86b-6c7a-4a54-aee9-1daed2c99b93" />

User Receptionist in Firestore Database
<img width="960" alt="Screenshot 2025-01-16 051826" src="https://github.com/user-attachments/assets/5d9d0efc-da00-41d6-9878-f01c2b2571c7" />

User Doctor in Firestore Database
<img width="960" alt="Screenshot 2025-01-16 051838" src="https://github.com/user-attachments/assets/f9054142-561c-476d-a7e5-b5c7c620cb87" />

First Patient in Firestore Database
<img width="960" alt="Screenshot 2025-01-16 051748" src="https://github.com/user-attachments/assets/478121b3-4e2b-4bcf-a5fd-6e2174712c88" />

Second Patient in Firestore Database
<img width="960" alt="Screenshot 2025-01-16 051802" src="https://github.com/user-attachments/assets/ec78e22a-0b5e-48e3-ac53-ccd79202165f" />

Bill Generation of First Patient in Firestore Database
<img width="960" alt="Screenshot 2025-01-16 052034" src="https://github.com/user-attachments/assets/8a8386c7-4973-41b7-a64e-5ce9628ca30b" />

Bill Generation of Second Patient in Firestore Database
<img width="960" alt="Screenshot 2025-01-16 052017" src="https://github.com/user-attachments/assets/dcb326bd-c480-4ba1-98c1-51d42b074e23" />


---

## Security and Access Control
- **Role-Based Access:**
  - Receptionist: Register patients, view patient records and generate bills.
  - Doctor: Add prescriptions and view patient records.
- **Firestore Security Rules:**
  - Restrict read and write access based on the user’s role and authentication status.

---

## Key Advantages
1. **Scalability:**
   - Firebase’s serverless architecture automatically scales with the clinic’s needs.
2. **Real-Time Updates:**
   - Firestore ensures updated records are visible instantly.
3. **Modularity:**
   - Clear separation of responsibilities between receptionist and doctor.
4. **Ease of Deployment:**
   - Firebase Hosting makes the application globally accessible with minimal effort.
5. **Data Consistency:**
   - Using `serverTimestamp` ensures reliable and consistent timestamps.

---

## Future Enhancements
This architecture is designed to be flexible and scalable, allowing for potential future features such as:
- Appointment scheduling.
- Notifications for patients and staff.
- Advanced analytics for patient and clinic performance insights.
