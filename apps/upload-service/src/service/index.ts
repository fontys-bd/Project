import { GetData } from "../integration/index";
import { GetDataByID } from "../integration/index";

export function ModifiedData() {
  const sample = GetData();
  console.log(sample);
  return sample;
}

export function ModifiedDataByID(id: string) {
  const sample = GetDataByID(id);
  console.log(sample);
  return sample;
}
