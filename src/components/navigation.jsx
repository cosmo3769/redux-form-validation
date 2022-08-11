import {Routes, Route, useNavigate} from 'react-router-dom';
import Cancel from './cancel';
import FormComponent from './FormComponent';
import Help from './help';

// const navigate = useNavigate();

// const navigateToContacts = () => {
// // 👇️ navigate to /contacts
// navigate('/contacts');
// };

// const navigateHome = () => {
// // 👇️ navigate to /
// navigate('/');
// };

export default function Navigation() {
    const submit = values => {
        console.log(values)
      }
    return (
        <Routes>
            <Route path='/' element={<FormComponent onSubmit={submit} />}></Route>
            <Route path='/help' element={<Help/>}></Route>
            <Route path='/cancel' element={<Cancel />}></Route>
        </Routes>
    )
}