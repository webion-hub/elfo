
interface ColorColoredLine
{
    color: string;
}
export default function ColoredLine(props: ColorColoredLine)
{
    return (
        <hr color={props.color}></hr>
    );
}