export default function funcDistruct(obj) {
  const {
    id,
    name: specialName,
    description = 'Описание недоступно',
    icon,
  } = obj;

  return {
    id,
    name: specialName,
    description,
    icon,
  };
}
