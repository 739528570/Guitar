export default function Home() {
  return (
    <div class="h-56 grid grid-cols-3 gap-4 content-start">
      <Item href="/guitar">吉他谱</Item>
      <Item href="/import">导入</Item>
    </div>
  );
}

const Item = ({ children, href }) => {
  return (
    <a href={href}>
      <div className="transition ease-in-out delay-250 hover:scale-110 hover:shadow-md p-8 text-xl cursor-pointer">
        {children}
      </div>
    </a>
  );
};
