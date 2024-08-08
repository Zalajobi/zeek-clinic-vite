import { useQuery } from "react-query";
import { axiosGetRequestHandler } from "@lib/axios";
import { AdminResponsePayload } from "@type/payloads.types";

export const useAdminDashboard = () => {
  // Get Admin Profile
  const { data: adminData, isLoading: adminDataLoading } = useQuery({
    queryKey: ["getAdminProfile"],
    queryFn: async () => {
      const { data } = await axiosGetRequestHandler(`/account/admin/profile`);

      return data as AdminResponsePayload;
    },
  });

  return {
    // Values
    adminData,
    adminDataLoading,
  };
};
