import re

def pdf_stream_to_svg(stream_path, width=1060.5, height=564.75):
    with open(stream_path, 'r', encoding='latin1') as f:
        content = f.read()

    tokens = content.split()
    svg_elements = []
    
    current_path = []
    current_fill = "#000000"
    current_stroke = "none"
    stroke_width = 1
    
    i = 0
    stack = []
    
    while i < len(tokens):
        t = tokens[i]
        
        # Check numbers / coordinates
        try:
            val = float(t)
            stack.append(val)
            i += 1
            continue
        except ValueError:
            pass
            
        # PDF graphics operators
        if t == 'rg': # set fill color RGB
            if len(stack) >= 3:
                r, g, b = stack[-3], stack[-2], stack[-1]
                current_fill = f"rgb({int(round(r*255))},{int(round(g*255))},{int(round(b*255))})"
                stack = []
        elif t == 'RG': # set stroke color RGB
            if len(stack) >= 3:
                r, g, b = stack[-3], stack[-2], stack[-1]
                current_stroke = f"rgb({int(round(r*255))},{int(round(g*255))},{int(round(b*255))})"
                stack = []
        elif t == 'w': # line width
            if stack:
                stroke_width = stack[-1]
                stack = []
        elif t == 'm': # moveto
            if len(stack) >= 2:
                x, y = stack[-2], stack[-1]
                current_path.append(f"M {x} {y}")
                stack = []
        elif t == 'l': # lineto
            if len(stack) >= 2:
                x, y = stack[-2], stack[-1]
                current_path.append(f"L {x} {y}")
                stack = []
        elif t == 'c': # curveto (cubic bezier)
            if len(stack) >= 6:
                x1, y1, x2, y2, x3, y3 = stack[-6], stack[-5], stack[-4], stack[-3], stack[-2], stack[-1]
                current_path.append(f"C {x1} {y1}, {x2} {y2}, {x3} {y3}")
                stack = []
        elif t == 'v':
            if len(stack) >= 4:
                x2, y2, x3, y3 = stack[-4], stack[-3], stack[-2], stack[-1]
                current_path.append(f"S {x2} {y2}, {x3} {y3}")
                stack = []
        elif t == 'y':
            if len(stack) >= 4:
                x1, y1, x3, y3 = stack[-4], stack[-3], stack[-2], stack[-1]
                current_path.append(f"C {x1} {y1}, {x1} {y1}, {x3} {y3}")
                stack = []
        elif t == 'h': # closepath
            current_path.append("Z")
            stack = []
        elif t == 're': # rectangle x y w h
            if len(stack) >= 4:
                x, y, w, h = stack[-4], stack[-3], stack[-2], stack[-1]
                current_path.append(f"M {x} {y} L {x+w} {y} L {x+w} {y+h} L {x} {y+h} Z")
                stack = []
        elif t in ('f', 'f*', 'F'): # fill
            if current_path:
                d = " ".join(current_path)
                svg_elements.append(f'<path d="{d}" fill="{current_fill}" fill-rule="{"evenodd" if t=="f*" else "nonzero"}" />')
                current_path = []
            stack = []
        elif t in ('s', 'S'): # stroke
            if current_path:
                d = " ".join(current_path)
                svg_elements.append(f'<path d="{d}" fill="none" stroke="{current_stroke}" stroke-width="{stroke_width}" />')
                current_path = []
            stack = []
        elif t in ('b', 'b*', 'B', 'B*'): # fill and stroke
            if current_path:
                d = " ".join(current_path)
                svg_elements.append(f'<path d="{d}" fill="{current_fill}" stroke="{current_stroke}" stroke-width="{stroke_width}" fill-rule="{"evenodd" if "*" in t else "nonzero"}" />')
                current_path = []
            stack = []
        elif t == 'n': # no-op / end path without stroke/fill
            current_path = []
            stack = []
        else:
            # other operator (gs, q, Q, cm, etc.)
            stack = []
        i += 1
        
    svg_header = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">\n'
    svg_content = "\n".join(svg_elements)
    svg_footer = "\n</svg>"
    
    return svg_header + svg_content + svg_footer

if __name__ == '__main__':
    svg_code = pdf_stream_to_svg('stream_0.txt')
    with open('public/images/brand/kuwala_logo.svg', 'w', encoding='utf-8') as f:
        f.write(svg_code)
    print("Generated public/images/brand/kuwala_logo.svg")
