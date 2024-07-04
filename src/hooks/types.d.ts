export type THookHandler<T> = {
  onSuccess?: (data?: T | null) => void;
  onError?: (error: any) => void;
  onFinish?: () => void;
};
