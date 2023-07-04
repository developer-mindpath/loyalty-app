import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ITranslationFields } from "@/redux/reducers/translations";
import service from "../../service/translationService";

async function get() {
  return await service.get();
}

async function update(payload: Partial<ITranslationFields>) {
  return service.update(payload);
}

const actions = {
  get: createAsyncThunk("translations/get", get),
  update: createAsyncThunk("translations/update", update),
};

export default actions;
