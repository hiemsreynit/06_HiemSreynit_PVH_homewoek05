import ButtonComponent from "./ButtonComponent";
import CardComponent from "./CardComponent";
import SortComponent from "./SortComponent";


export default function MainComponent () {
    return (
        <>
            <section className="flex flex-col gap-y-3 w-full">
                <section className="flex justify-between items-center">
                    <ButtonComponent>
                        Back
                    </ButtonComponent>
                    <section className="flex items-center gap-x-2">
                        <p className="hover:text-yellow-400">Your Bookmark</p>
                        <SortComponent onClick={true}/>
                    </section>
                </section>
                <CardComponent />
            </section>
        </>
    );
}