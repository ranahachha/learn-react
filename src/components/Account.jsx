import { getImageUrl } from "../assets/utils";
function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      height={size}
      width={size}
    />
  );
}

export default function Account() {
  return (
    <>
      <Avatar
        person={{
          name: "katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
        size={100}
      />
    </>
  );
}
