import React, { useEffect, useState } from "react";
import { Grid, TextField, Checkbox, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const AddContact = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("personal");
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts") || "[]");
    setContacts(data);
  }, []);

  const handleData = () => {
    contacts.push({
      id: Math.floor(Math.random() * 1000000),
      name: name,
      phone: phone,
      type: type,
      isWhatsapp: isWhatsapp,
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setName("");
    setPhone("");
    setType("personal");
    isWhatsapp(false);
  };

  const handleCheckbox = () => {
    setIsWhatsapp(!isWhatsapp);
  };

  const deleteContact = (id) => {
    const temp = contacts.filter((item) => item.id !== id);
    localStorage.setItem("contacts", JSON.stringify(temp));
    setContacts(temp);
  };

  const clearData = () => {
    localStorage.clear();
  };

  return (
    <div style={{marginTop: 50}}>
    <div style={{width: "60%", margin: "0 auto"}}>
       <Grid item style={{ width: "80%", margin: "0 auto" }}>
            <TextField
              variant="outlined"
              label="name"
              name="name"
              className="textfields"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={{ width: "100%", fontSize: "10px", marginBottom: 20 }}
            />
          </Grid>
          <Grid item style={{ width: "80%", margin: "0 auto" }}>
            <TextField
              variant="outlined"
              label="phone"
              name="phone"
              className="textfields"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              style={{ width: "100%", fontSize: "10px", marginBottom: 20 }}
            />
          </Grid>

          <Grid item style={{ width: "80%", margin: "0 auto" }}>
            <FormControl style={{ width: "100%", marginBottom: 20 }}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="type"
                name="type"
                defaultValue={type}
                onChange={e=> setType(e.target.value)}
              >
                <MenuItem value="personal">Personal</MenuItem>
                <MenuItem value="office">Office</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container style={{ width: "80%", margin: "0 auto" }}>
            <Checkbox
              size={"small"}
              defaultChecked={isWhatsapp}
              onChange={handleCheckbox}
            />
            <Typography variant="subtitle1" style={{ marginTop: 7 }}>
              Whatsapp
            </Typography>
          </Grid>
      <div style={{width: "10%",margin: "0 auto"}}>
        <Button onClick={handleData} variant="contained">Add</Button>
      </div>
    </div>
    </div>
  );
};

export default AddContact;
