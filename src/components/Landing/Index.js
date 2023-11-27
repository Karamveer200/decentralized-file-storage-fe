import FileUploader from './FileUploader/FileUploader';
import FileRetriever from './FileRetriever/FileRetriever';
import BodyContainer from '../Common/BodyContainer/BodyContainer';

const Index = () => {
  return (
    <BodyContainer className="h-screen">
      <FileUploader />
      <FileRetriever />
    </BodyContainer>
  );
};

export default Index;
