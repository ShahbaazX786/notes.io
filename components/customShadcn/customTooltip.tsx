import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const CustomTooltip = ({ name, icon }: any) => {
    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger>
                    {icon}
                </TooltipTrigger>
                <TooltipContent>
                    <h2 className="text-sm font-semibold">
                        {name}
                    </h2>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default CustomTooltip