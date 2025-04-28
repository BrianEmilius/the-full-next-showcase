import React from "react";

// Types for your rich content blocks
export type BlockType = "HEADING" | "TEXT" | "IMAGE" | "QUOTE" | "CODE" | "VIDEO";

export type PostBlock = {
  id: string;
  type: BlockType;
  content: any; // We'll parse this safely depending on type
  position: number;
};

type TextSpan = {
  text: string;
  marks?: (string | { type: string; [key: string]: any })[];
};

type RichTextContent = {
  spans: TextSpan[];
};

export function renderTextContent(content: RichTextContent): React.ReactNode {
  return content.spans.map((span, index) => {
    let element: React.ReactNode = span.text;

    if (span.marks) {
      for (const mark of span.marks) {
        if (typeof mark === "string") {
          switch (mark) {
            case "bold":
              element = <strong key={index}>{element}</strong>;
              break;
            case "italic":
              element = <em key={index}>{element}</em>;
              break;
            case "underline":
              element = <u key={index}>{element}</u>;
              break;
            case "strikethrough":
              element = <s key={index}>{element}</s>;
              break;
            case "code":
              element = <code key={index}>{element}</code>;
              break;
          }
        } else if (typeof mark === "object" && mark.type === "link") {
          element = (
            <a key={index} href={mark.href} target="_blank" rel="noopener noreferrer">
              {element}
            </a>
          );
        }
      }
    }

    return <React.Fragment key={index}>{element}</React.Fragment>;
  });
}

// Full block renderer
export function renderPostBlock(block: PostBlock): React.ReactNode {
  const { type, content, id } = block;

  switch (type) {
    case "HEADING":
			switch (content.level) {
				case 1:
					return <h1 key={id}>{content.text}</h1>;
				case 2:
					return <h2 key={id}>{content.text}</h2>;
				case 3:
					return <h3 key={id}>{content.text}</h3>;
				case 4:
					return <h4 key={id}>{content.text}</h4>;
				case 5:
					return <h5 key={id}>{content.text}</h5>;
				case 6:
					return <h6 key={id}>{content.text}</h6>;
				default:
					return <h2 key={id}>{content.text}</h2>;
			}

    case "TEXT":
      return <p key={id}>{renderTextContent(content)}</p>;

    case "IMAGE":
      return (
        <figure key={id}>
          <img src={content.url} alt={content.alt ?? ""} />
          {content.caption && <figcaption>{content.caption}</figcaption>}
        </figure>
      );

    case "QUOTE":
      return (
        <blockquote key={id}>
          <p>{content.text}</p>
          {content.author && <footer>— {content.author}</footer>}
        </blockquote>
      );

    case "CODE":
      return (
        <pre key={id}>
          <code className={`language-${content.language ?? "plaintext"}`}>
            {content.code}
          </code>
        </pre>
      );

    case "VIDEO":
      if (content.provider === "youtube" && content.videoId) {
        return (
          <div key={id} style={{ aspectRatio: "16/9" }}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${content.videoId}`}
              title={content.title ?? "Embedded Video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      }
      return <p key={id}>Unsupported video provider.</p>;

    default:
      return <div key={id}>Unsupported block type: {type}</div>;
  }
}

// Render a full post from an array of blocks
export function renderPost(blocks: PostBlock[]): React.ReactNode {
  return <>{blocks.sort((a, b) => a.position - b.position).map(renderPostBlock)}</>;
}
