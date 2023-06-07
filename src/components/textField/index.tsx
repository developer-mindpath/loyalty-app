import {
  TextField as PolarisTextField,
  TextFieldProps,
} from "@shopify/polaris";
import {
  ForwardedRef,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

type ValidateFunctionType = () => boolean;
type ResetFunctionType = () => void;

export interface ITextFieldRef {
  validate: ValidateFunctionType;
  reset: ResetFunctionType;
}

type IValidationResponse = undefined | string;

type ValidationFunctionType = (
  value?: string,
  required?: boolean
) => IValidationResponse;

type ITextFieldProps = TextFieldProps & {
  // Validation Function to be used upon validation
  validation?: ValidationFunctionType;
};

function TextField(props: ITextFieldProps, ref: ForwardedRef<ITextFieldRef>) {
  const { validation, value, requiredIndicator } = props;
  const [shouldValidate, setShouldValidate] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>();

  useImperativeHandle(
    ref,
    () => ({
      validate: () => {
        if (!validation) return true;
        const error = validation?.(value);
        setError(error);
        return !!error;
      },
      reset: () => {
        setError(undefined);
      },
    }),
    [validation, value]
  );

  useEffect(() => {
    if (!shouldValidate) return;
    const error = validation?.(value, requiredIndicator);
    setError(error);
  }, [validation, value, shouldValidate, requiredIndicator]);

  return (
    <PolarisTextField
      {...props}
      error={error}
      onBlur={() => setShouldValidate(true)}
    />
  );
}

export default memo(forwardRef<ITextFieldRef, ITextFieldProps>(TextField));
