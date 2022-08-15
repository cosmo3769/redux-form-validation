import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import Input, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';

const CountrySelect = ({ value, onChange, labels, ...rest }) => (
  <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
    <option value="">{labels.ZZ}</option>
    {getCountries().map((country) => (
      <option key={country} value={country}>
        {labels[country]} +{getCountryCallingCode(country)}
      </option>
    ))}
  </select>
);

function ContactInput() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  // const [value, setValue] = useState()
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  return (
    <div>
      <CountrySelect labels={en} value={country} onChange={setCountry} name="countrySelect" />
      <Input country={country} value={phoneNumber} onChange={setPhoneNumber} placeholder="Enter phone number" name="phoneNumber" />
    </div>
  //   <PhoneInput
  //     international
  //     defaultCountry='US'
  //     placeholder="Enter phone number"
  //     value={value}
  //     onChange={setValue}/>
   )
}

export default ContactInput