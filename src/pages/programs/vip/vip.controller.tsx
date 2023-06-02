import { useState } from "react";

interface IVipCOntrollerResponse {
  getters: {
    startDateEdit: boolean;
    expirationEdit: boolean;
    entryMethodEdit: boolean;
    items: {
      id: string;
      Name: string;
      icon: string;
      path: string;
      points: number;
    }[];
    entryMethod: string;
    expiration: string;
  };
  handlers: {
    handlestartDateEdit: (show: boolean) => void;
    handleExpirationEdit: (show: boolean) => void;
    handleEntryMethodEit: (show: boolean) => void;
    handleCancelstartDate: () => void;
    handleCancelExpiration: () => void;
    handleCancelEntryMethod: () => void;
    handleUpdatestartDate: () => void;
    handleUpdateExpiration: () => void;
    handleUpdateEntryMethod: () => void;
    handleChangeExpiration: (key: string) => void;
    handleChangeEntryMethod: (key: string) => void;
  };
}

export const VipController = (): IVipCOntrollerResponse => {
  const [startDateEdit, setStartDateEdit] = useState<boolean>(false);
  const [expirationEdit, setExpirationEdit] = useState<boolean>(false);
  const [entryMethodEdit, seteEntryMethodEdit] = useState<boolean>(false);
  const items = [
    {
      id: "tier-Bronze",
      Name: "Bronze",
      icon: "",
      path: "./",
      points: 500,
    },
    {
      id: "tier-Silver",
      Name: "Silver",
      icon: "",
      path: "./",
      points: 700,
    },
    {
      id: "tier-Gold",
      Name: "Gold",
      icon: "",
      path: "./",
      points: 1500,
    },
  ];
  const [entryMethod, setEntryMethod] = useState("Points earned");
  const [expiration, setExpiration] = useState("lifetime");

  const handlestartDateEdit = (show: boolean) => {
    setStartDateEdit(show);
  };
  const handleExpirationEdit = (show: boolean) => {
    setExpirationEdit(show);
  };
  const handleEntryMethodEit = (show: boolean) => {
    seteEntryMethodEdit(show);
  };

  const handleCancelstartDate = () => {
    // set startd date back to initial value
  };

  const handleCancelExpiration = () => {
    // set expiration back to initial value
  };

  const handleCancelEntryMethod = () => {
    // set entry method back to initial value
  };

  const handleUpdatestartDate = () => {
    // update start date
  };

  const handleUpdateExpiration = () => {
    // update start date
  };

  const handleUpdateEntryMethod = () => {
    // update start date
  };

  const handleChangeExpiration = (key: string) => {
    setExpiration(key);
  };

  const handleChangeEntryMethod = (key: string) => {
    setEntryMethod(key);
  };

  return {
    getters: {
      startDateEdit,
      expirationEdit,
      entryMethodEdit,
      items,
      entryMethod,
      expiration,
    },
    handlers: {
      handlestartDateEdit,
      handleExpirationEdit,
      handleEntryMethodEit,
      handleCancelstartDate,
      handleCancelExpiration,
      handleCancelEntryMethod,
      handleUpdatestartDate,
      handleUpdateExpiration,
      handleUpdateEntryMethod,
      handleChangeExpiration,
      handleChangeEntryMethod,
    },
  };
};
