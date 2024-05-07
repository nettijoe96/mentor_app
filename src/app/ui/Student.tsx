export function StudentComponent(props: any) {
  const { children, coach } = props;

  return (
    <div className="flex flex-col justify-between items-center gap-3">
      <div className="text-md">
        Book a time on {coach.full_name}'s Calendar:
      </div>
      {children}
    </div>
  );
}
