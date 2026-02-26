import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const Page =()=>{
    const something = false
    return(
        <div className={cn("text-red-500 font-bold",
            something ? "text-red-100":"text-red-500",
        )}>
            hello world!
            <Button variant="outline">
                click me!

            </Button>
        </div>
    )
}
export default Page;