import {FaqAccordion} from "@/src/components/shared/FAQ-section/FaqAccordion/FaqAccrodion";
import {FaqForm} from "@/src/components/shared/FAQ-section/FaqForm/FaqForm";

const FAQSection = () => {
    return (
        <section className={`flex flex-col items-center justify-center gap-10 py-[120px] lg:flex-row lg:justify-between`}>
            <FaqAccordion/>
            <FaqForm/>
        </section>
    )
}
export default FAQSection;
