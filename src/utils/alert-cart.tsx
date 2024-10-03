type alertProps = {
  res: string;
  animation: (value: string) => void;
  status: React.Dispatch<React.SetStateAction<string | null>>;
};

export const alert = (
  res: string,
  animation: (value: string) => void,
  status: React.Dispatch<React.SetStateAction<string | null>>
) => {
  animation(res);
  status(res);
  setTimeout(() => {
    animation("");
    setTimeout(() => {
      status(null);
    }, 500);
  }, 4000);
};
