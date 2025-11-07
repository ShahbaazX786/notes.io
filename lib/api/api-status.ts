import { toast } from "@/components/ui/use-toast";
import { apiResponse } from "../const/types";

const apiStatus = (res: apiResponse) => {
  if (res && res?.success) {
    goodToast(res?.message);
  } else {
    badToast(res?.message);
  }
};

const goodToast = (msg: string, desc?: string) => {
  toast({
    title: msg,
    description: desc,
    variant: "default",
  });
};

const badToast = (msg: string, desc?: string) => {
  toast({
    title: msg,
    description: desc,
    variant: "destructive",
  });
};

export default apiStatus;
export { badToast, goodToast };
