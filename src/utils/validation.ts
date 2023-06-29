import Regex from "./regex";

type StringOrUndefined = string | undefined;

/**
 * Validation Util Class
 */
class ValidationUtil {
  public static none(): StringOrUndefined {
    return undefined;
  }

  public static notEmpty(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (!value && required) return "Field is Required";
    return undefined;
  }

  public static email(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (!Regex.EMAIL.test(value!)) return "Please enter a valid Email Address";
    return ValidationUtil.notEmpty(value, required);
  }

  public static domain(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (!Regex.DOMAIN.test(value!)) return "Please enter a valid URL";
    return ValidationUtil.notEmpty(value, required);
  }

  public static domainPath(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (!Regex.DOMAIN_PATH.test(value!)) return "Please enter a valid URL";
    return ValidationUtil.notEmpty(value, required);
  }

  public static len(
    value: StringOrUndefined | undefined,
    required = false,
    options: { min: number; max: number }
  ): StringOrUndefined {
    const { max, min } = options;

    if (value!.length > max) return `Cannot be More than ${max}`;
    if (value!.length > min) return `Cannot be less than ${min}`;
    return ValidationUtil.notEmpty(value, required);
  }

  public static number(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (isNaN(Number(value))) return "Please enter a valid number";
    return ValidationUtil.notEmpty(value, required);
  }
}

export default ValidationUtil;
