import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const CustomTooltip = ({ name, icon, delay }: any) => {
    return (
        <TooltipProvider delayDuration={delay | 100}>
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