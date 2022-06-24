const baseUrl = "https://api.nazdik.org/api/v1";
const apiOptions = {
  // mode: "cors", // no-cors, *cors, same-origin
  // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  // credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/*+json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  // redirect: "follow", // manual, *follow, error
  // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  // body: JSON.stringify(data), // body data type must match "Content-Type" header
};

export const utils = {
  scrollToTop: () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};

export const replaceDigits = (number: string | number | undefined): string => {
  if (number)
    return number
      .toString()
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string): any => {
        return d.charCodeAt(0) - 1632;
      })
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: string): any => {
        return d.charCodeAt(0) - 1776;
      });
  return "";
};

export const validation = {
  required: (v: any): boolean | string => !!v || "فیلد اجباری", //app.i18n.t("validation.required"),
  email: (v: any): boolean | string =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(v || "") ||
    "ایمیل نامعتبر",
  // app.i18n.t("validation.email"),
  nationalCode: (v: any): boolean | string =>
    (v || "").length >= 10 || "کد ملی نامعتبر",
  min:
    (field: string, min: number) =>
    (v: any): boolean | string =>
      (v || "").length >= min || `${field} باید حداقل ${min} کاراکتر باشد`,
  // minCurrency:
  //   (field: string, min: number) =>
  //   (v: any): boolean | string => {
  //     return (
  //       (String(v).replace(/,/g, "") || "") >= min * 1000 ||
  //       app.i18n.t("validation.min_currency", { field, min })
  //     );
  //   },
  mobile: (v: string): boolean | string => {
    // Support persian character
    v = v
      .toString()
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string): any => {
        return d.charCodeAt(0) - 1632;
      })
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: string): any => {
        return d.charCodeAt(0) - 1776;
      });
    if (v && v[0] != "0") v = "0" + v;

    return (
      /^09[0|1|2|3|4|9][0-9]{8}$/.test(replaceDigits(v) || "") ||
      "شماره موبایل نامعتبر"
      // app.i18n.t("validation.mobile")
    );
  },
  samePassword: (pass: string, repass: string): boolean | string =>
    pass == repass || "کلمه عبورها یکسان نیستند",
};

export const api = {
  checkUserExist: {
    url: `${baseUrl}/account/checkUserExist`,
    options: {
      method: "post",
      ...apiOptions,
    },
  },
  register: {
    url: `${baseUrl}/account/register`,
    options: {
      method: "post",
      ...apiOptions,
    },
  },
  login: {
    url: `${baseUrl}/account/login`,
    options: {
      method: "post",
      ...apiOptions,
    },
  },
  loginOtp: {
    url: `${baseUrl}/account/loginOtp`,
    options: {
      method: "post",
      ...apiOptions,
    },
  },
  sendOtp: {
    url: `${baseUrl}/account/sendOtp`,
    options: {
      method: "post",
      ...apiOptions,
    },
  },
  // registerVerify,
  registerVerify: {
    url: `${baseUrl}/account/registerVerify`,
    options: {
      method: "post",
      ...apiOptions,
    },
  },
  // resendVerificationCode,
  resendVerificationCode: {
    url: `${baseUrl}/account/resendVerificationCode`,
    options: {
      method: "post",
      ...apiOptions,
    },
  },
};

export const services = {
  async checkUserExist(data: object): Promise<any> {
    let v = api.checkUserExist;
    const res = await fetch(v.url, {
      body: JSON.stringify(data),
      ...v.options,
    });
    return res.json();
  },
  async register(data: object): Promise<any> {
    let v = api.register;
    const res = await fetch(v.url, {
      body: JSON.stringify(data),
      ...v.options,
    });
    return res.json();
  },
  async login(data: object): Promise<any> {
    let v = api.login;
    const res = await fetch(v.url, {
      body: JSON.stringify(data),
      ...v.options,
    });
    return res.json();
  },
  async loginOtp(data: object): Promise<any> {
    let v = api.loginOtp;
    const res = await fetch(v.url, {
      body: JSON.stringify(data),
      ...v.options,
    });
    return res.json();
  },
  async sendOtp(data: object): Promise<any> {
    let v = api.sendOtp;
    const res = await fetch(v.url, {
      body: JSON.stringify(data),
      ...v.options,
    });
    return res.json();
  },
  async registerVerify(data: object): Promise<any> {
    let v = api.registerVerify;
    const res = await fetch(v.url, {
      body: JSON.stringify(data),
      ...v.options,
    });
    return res.json();
  },
  async resendVerificationCode(data: object): Promise<any> {
    let v = api.resendVerificationCode;
    const res = await fetch(v.url, {
      body: JSON.stringify(data),
      ...v.options,
    });
    return res.json();
  },
};
