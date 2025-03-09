interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold font-sora">{title}</h1>
    </div>
  );
};

export default PageHeader;
