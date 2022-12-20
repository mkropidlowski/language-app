import AddPostForm from "components/molecules/AddPostForm";
import SectionLayout from "components/molecules/SectionLayout";
import { addPostSectionHeader } from "config/panelSection/data";

const AddPostSection = () => (
    <SectionLayout heading={addPostSectionHeader}>
        <AddPostForm />
    </SectionLayout>
);
export default AddPostSection;
