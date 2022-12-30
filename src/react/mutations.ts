import { mutationFactory } from "./useMutation";

// Address mutations
export const useDefaultUserAddress = mutationFactory("setUserDefaultAddress");
export const useDeleteUserAddress = mutationFactory("setDeleteUserAddress");
export const useCreateUserAddress = mutationFactory("setCreateUserAddress");
export const useUpdateUserAddress = mutationFactory("setUpdateUserAddress");

// User mutations
export const usePasswordChange = mutationFactory("setPasswordChange");
export const useAccountUpdate = mutationFactory("setAccountUpdate");

export const useSetPassword = mutationFactory("setPassword");
