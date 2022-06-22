type Props = Omit<React.ComponentProps<"button">, "className">;

const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={
        "bg-orange-500 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
      }
    />
  );
};

export default Button;
