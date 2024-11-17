import { Route, Routes } from "react-router-dom"
import List from "./components/list"
import Name from "./components/Name"
import LastName from "./components/LastName"
import PhoneNumber from "./components/PhoneNumber"
import Email from "./components/Email"



function App() {

  return (
    <div>

      <Routes >
        <Route path="/" element={<List />} >
          <Route path="name" element={<Name />} />
          <Route path="lastName" element={<LastName />} />
          <Route path="phoneNumber" element={<PhoneNumber />} />
          <Route path="emailAdres" element={<Email />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
