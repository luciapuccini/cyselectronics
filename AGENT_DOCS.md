The codebase follows strict design principles and guidelines to ensure a cohesive and user-friendly experience. Some key principles include:

1. Sharp corners: All layouting components, including sections, cards, panels, and hero blocks, have sharp corner effects. No per-section grid overlays or secondary card vocabularies are used.

2. Shape reuse: A shape repeating ≥2 times is used in every card.

3. Paired colors: Every layouting component uses paired colors that can be easily differentiated visually and functionally.

4. Typography: The mirror in [src/styles/token.css](src/styles/token.css) exposes typography variables as strings for styled-components template literals to ensure consistency.

5. Tokenization: Only `--radius-md` exists, and only the single radius is used. No secondary radius overlays or per-section grid overlays are used in the codebase.

6. Grid: The source of truth for grid definitions lives in [src/styles/token.css](src/styles/token.css), which exposes all grid styles and their corresponding values to ensure consistency and readable code.

These principles help to create a cohesive, user-friendly experience that is easy to read and navigate. The codebase follows these guidelines even in the case of minor deviations or exceptions based on specific design requirements and user needs.
