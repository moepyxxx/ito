import { Typography } from "@/components/atoms/Typography";

type Props = {
    title: string;
    description?: string;
}
export const Title: React.FC<Props> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center py-11">
            <Typography element="h1" size="large">{title}</Typography>
            {description && (
                <Typography className="mt-4">{description}</Typography>
            )}
        </div>
    );
}