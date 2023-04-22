import { useState } from "react";
import { Form, Photo, Plug, PhotoSelection, LabelPhotoSelection, SelectionIcon, Label, LabelName, Input, Button } from "./styles.styled";

export const UserForm = () => {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [telegram, setTelegram] = useState("");
    const [photo, setPhoto] = useState("");

    const userPhoto = photo ? <Photo src={photo} alt="User's photo" /> : <Plug />;

    const handleImageUpload = e => { 
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPhoto(reader.result);
        };

        reader.readAsDataURL(file);
    }

    return (
        <Form autocomplete="off" enctype="multipart/form-data">
            {userPhoto}
            <LabelPhotoSelection>
                <SelectionIcon size={8}/>
                <PhotoSelection
                    type="file"
                    name="photo"
                    onChange={handleImageUpload}
                />
            </LabelPhotoSelection>
            <Label>
                <LabelName>
                    User Name
                </LabelName>
                <Input
                    type="text"
                    name="name"
                    placeholder="Edit your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </Label>
            <Label>
                <LabelName>
                    Birthday
                </LabelName>
                <Input
                    type="text"
                    name="birthday"
                    placeholder={new Date().toLocaleDateString()}
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                />
            </Label>
            <Label>
                <LabelName>
                    Email
                </LabelName>
                <Input
                    type="email"
                    name="email"
                    placeholder="Edit your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </Label>
            <Label>
                <LabelName>
                    Phone
                </LabelName>
                <Input
                    type="text"
                    name="phone"
                    placeholder="Add a phone number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </Label>
            <Label>
                <LabelName>
                    Telegram
                </LabelName>
                <Input
                    type="text"
                    name="telegram"
                    placeholder="Add a link to Telegram"
                    value={telegram}
                    onChange={e => setTelegram(e.target.value)}
                />
            </Label>
            <Button
                type="submit">
                Save changes
            </Button>
        </Form>
    );
};