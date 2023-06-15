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
    if (!required) return undefined;
    if (!value) return "Field is Required";
  }

  public static email(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (!ValidationUtil.notEmpty(value, required)) return;
    if (!Regex.EMAIL.test(value!)) return "Please enter a valid Email Address";
  }

  public static domain(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (!ValidationUtil.notEmpty(value, required)) return;
    if (!Regex.DOMAIN.test(value!)) return "Please enter a valid URL";
  }

  public static domainPath(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (!ValidationUtil.notEmpty(value, required)) return;
    if (!Regex.DOMAIN_PATH.test(value!)) return "Please enter a valid URL";
  }

  public static len(
    value: StringOrUndefined | undefined,
    required = false,
    options: { min: number; max: number }
  ): StringOrUndefined {
    if (!ValidationUtil.notEmpty(value, required)) return;
    const { max, min } = options;

    if (value!.length > max) return `Cannot be More than ${max}`;
    if (value!.length > min) return `Cannot be less than ${min}`;
  }

  public static number(
    value: StringOrUndefined,
    required = false
  ): StringOrUndefined {
    if (!ValidationUtil.notEmpty(value, required)) return;
    if (isNaN(Number(value))) return "Please enter a valid number";
  }
}

export default ValidationUtil;
