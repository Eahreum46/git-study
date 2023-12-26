import React from "react";
import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const contactList = useSelector((state) => state.contactList);
  constkeyWord = useSelector((state) => state.keyWord);
  useEffect(() => {
    if (keyWord !== "") {
      const list = contactList.filter((item) => item.name.includes(keyWord));
      setFilteredList(list);
    }
  }, [keyWord]);
  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
