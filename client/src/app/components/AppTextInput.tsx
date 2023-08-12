import { TextField } from "@material-ui/core";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps{
    label: string;
    multiline?: boolean;
    minrows?: number;
    type?: string;
}

export default function AppTextInput(props: Props){
    const {fieldState, field} = useController({...props, defaultValue: ''})
    return(
        <TextField
            {...props}
            {...field}
            multiline={props.multiline}
            minRows={props.minrows}
            type={props.type}
            fullWidth
            variant='outlined'
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
        />
    )
}