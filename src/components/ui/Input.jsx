import { Input } from "@chakra-ui/react";

function InputField({item, handleInputChange}) {
    return(
        <div>
            <Input 
            name={item?.name}
            type={item?.fieldType}
            onChange={(e)=>handleInputChange(item.name, e.target.value)}
            />
        </div>
    )
}

export default InputField