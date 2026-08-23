import math
import os
import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def draw_vector_icons(draw, base_x, base_y):
    # Draw HTML5, React, JS, and GitHub icons in glowing cyber style
    icon_size = 64
    spacing = 110
    
    # 1. HTML5 Shield
    x1, y1 = base_x, base_y
    # Glow & box
    draw.rounded_rectangle([x1-4, y1-4, x1+icon_size+4, y1+icon_size+4], radius=14, fill=(0, 229, 255, 30))
    # Shield shape
    pts = [
        (x1 + 14, y1 + 10), (x1 + icon_size - 14, y1 + 10),
        (x1 + icon_size - 18, y1 + icon_size - 16),
        (x1 + icon_size // 2, y1 + icon_size - 6),
        (x1 + 18, y1 + icon_size - 16)
    ]
    draw.polygon(pts, fill=(15, 26, 42, 230), outline=(0, 229, 255), width=2)
    # Number 5 inside shield
    f_mono = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 22)
    draw.text((x1 + 25, y1 + 18), "5", font=f_mono, fill=(0, 229, 255))
    draw.text((x1 + 17, y1 + 38), "HTML", font=ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 10), fill=(255, 255, 255))

    # 2. React Atom
    x2 = base_x + spacing
    cx, cy = x2 + icon_size // 2, y1 + icon_size // 2
    draw.rounded_rectangle([x2-4, y1-4, x2+icon_size+4, y1+icon_size+4], radius=14, fill=(0, 245, 210, 30))
    draw.ellipse([cx-4, cy-4, cx+4, cy+4], fill=(0, 245, 210))
    # Orbits
    draw.ellipse([cx-24, cy-10, cx+24, cy+10], outline=(0, 245, 210), width=2)
    draw.ellipse([cx-12, cy-22, cx+12, cy+22], outline=(0, 245, 210), width=2)

    # 3. JavaScript Hexagon
    x3 = base_x + spacing * 2
    draw.rounded_rectangle([x3-4, y1-4, x3+icon_size+4, y1+icon_size+4], radius=14, fill=(247, 223, 30, 30))
    draw.rounded_rectangle([x3, y1, x3+icon_size, y1+icon_size], radius=12, fill=(15, 26, 42, 230), outline=(247, 223, 30), width=2)
    f_js = ImageFont.truetype("C:/Windows/Fonts/bahnschrift.ttf", 28)
    draw.text((x3 + 17, y1 + 14), "JS", font=f_js, fill=(247, 223, 30))

    # 4. GitHub Octocat Silhouette / Badge
    x4 = base_x + spacing * 3
    draw.rounded_rectangle([x4-4, y1-4, x4+icon_size+4, y1+icon_size+4], radius=14, fill=(168, 85, 247, 30))
    draw.rounded_rectangle([x4, y1, x4+icon_size, y1+icon_size], radius=12, fill=(15, 26, 42, 230), outline=(168, 85, 247), width=2)
    gcx, gcy = x4 + icon_size // 2, y1 + icon_size // 2
    # Cat ears & head
    draw.polygon([(gcx-14, gcy-12), (gcx-8, gcy-4), (gcx+8, gcy-4), (gcx+14, gcy-12), (gcx+16, gcy+8), (gcx-16, gcy+8)], fill=(168, 85, 247))
    draw.ellipse([gcx-12, gcy-6, gcx+12, gcy+12], fill=(168, 85, 247))
    draw.ellipse([gcx-4, gcy-1, gcx-1, gcy+2], fill=(15, 26, 42))
    draw.ellipse([gcx+1, gcy-1, gcx+4, gcy+2], fill=(15, 26, 42))

def create_business_card():
    width, height = 2000, 1200
    
    # Base dark canvas
    img = Image.new("RGBA", (width, height), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)
    
    # Ultra-smooth dark carbon gradient background
    for y in range(height):
        factor = y / height
        r = int(10 * (1 - factor) + 5 * factor)
        g = int(14 * (1 - factor) + 8 * factor)
        b = int(22 * (1 - factor) + 14 * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    # Dense ambient lighting glow
    ambient = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    a_draw = ImageDraw.Draw(ambient)
    
    # Cyan/Neon blue aura on upper right
    a_draw.ellipse([1250, -50, 2100, 750], fill=(0, 220, 255, 45))
    # Vibrant purple/violet aura on lower right
    a_draw.ellipse([1350, 500, 2150, 1250], fill=(180, 80, 255, 55))
    # Electric emerald accent aura
    a_draw.ellipse([1100, 250, 1850, 850], fill=(0, 255, 140, 30))
    
    ambient = ambient.filter(ImageFilter.GaussianBlur(130))
    img.alpha_composite(ambient)

    # 2. Rich Cyberpunk Circuit Board Traces (Right side)
    cyan = (0, 229, 255, 255)
    teal = (0, 245, 180, 255)
    purple = (185, 95, 255, 255)
    magenta = (235, 75, 215, 255)
    emerald = (0, 255, 110, 255)

    traces = [
        # Top-tier dense circuit cluster
        ([(2000, 80), (1680, 80), (1560, 200), (1420, 200), (1350, 270), (1220, 270)], cyan, 5, False, True),
        ([(2000, 130), (1740, 130), (1640, 230), (1490, 230), (1420, 300), (1280, 300)], teal, 4, False, True),
        ([(1950, 0), (1800, 150), (1800, 280), (1690, 390), (1520, 390), (1460, 450), (1360, 450)], purple, 4, False, True),
        ([(2000, 220), (1840, 220), (1750, 310), (1580, 310)], cyan, 5, False, True),
        ([(2000, 310), (1880, 310), (1790, 400), (1620, 400), (1540, 480), (1390, 480)], magenta, 4, False, True),
        ([(2000, 390), (1820, 390), (1720, 490), (1460, 490), (1390, 420), (1250, 420)], emerald, 4, False, True),
        ([(2000, 480), (1870, 480), (1770, 580), (1550, 580)], purple, 4, False, True),
        ([(1980, 560), (1840, 560), (1740, 660), (1600, 660)], teal, 4, False, True),
        ([(2000, 650), (1890, 650), (1810, 730), (1660, 730)], cyan, 4, False, True),
        ([(1920, 740), (1810, 740), (1730, 820), (1590, 820)], purple, 4, True, True),
        ([(2000, 840), (1860, 840), (1770, 930), (1640, 930)], magenta, 4, False, True),
        ([(2000, 960), (1820, 960), (1730, 870), (1610, 870)], emerald, 4, False, True),
        # Micro branches & jumper tracks
        ([(1580, 160), (1490, 160), (1430, 220)], cyan, 3, True, True),
        ([(1620, 450), (1550, 450), (1490, 390)], teal, 3, True, True),
        ([(1700, 260), (1630, 260), (1570, 200)], purple, 3, True, True),
        ([(1480, 520), (1410, 520), (1350, 460)], emerald, 3, True, True),
        ([(1660, 600), (1590, 600), (1530, 540)], cyan, 3, True, True),
    ]

    # Glow layer for circuit lines
    circuit_glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    cg_draw = ImageDraw.Draw(circuit_glow)
    for pts, col, w, s_node, e_node in traces:
        cg_draw.line(pts, fill=(col[0], col[1], col[2], 140), width=w + 10, joint="round")
        if s_node:
            p = pts[0]
            cg_draw.ellipse([p[0]-14, p[1]-14, p[0]+14, p[1]+14], fill=(col[0], col[1], col[2], 200))
        if e_node:
            p = pts[-1]
            cg_draw.ellipse([p[0]-14, p[1]-14, p[0]+14, p[1]+14], fill=(col[0], col[1], col[2], 200))
    
    circuit_glow = circuit_glow.filter(ImageFilter.GaussianBlur(10))
    img.alpha_composite(circuit_glow)

    # Sharp circuit lines & terminal pads
    circuit_sharp = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    cs_draw = ImageDraw.Draw(circuit_sharp)
    for pts, col, w, s_node, e_node in traces:
        cs_draw.line(pts, fill=col, width=w, joint="round")
        if s_node:
            p = pts[0]
            cs_draw.ellipse([p[0]-7, p[1]-7, p[0]+7, p[1]+7], fill=(255, 255, 255), outline=col, width=3)
        if e_node:
            p = pts[-1]
            cs_draw.ellipse([p[0]-7, p[1]-7, p[0]+7, p[1]+7], fill=(255, 255, 255), outline=col, width=3)
    
    img.alpha_composite(circuit_sharp)

    # 3. Typography & Fonts
    title_font = ImageFont.truetype("C:/Windows/Fonts/bahnschrift.ttf", 94)
    subtitle_font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 48)
    contact_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 42)
    contact_bold = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 42)
    url_font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 46)

    text_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    t_draw = ImageDraw.Draw(text_layer)
    
    left_x = 130

    # Glow & Header: ALEX CHEN / BRADY CNK
    # Soft purple/cyan glow behind main title
    for r in range(12, 0, -3):
        t_draw.text((left_x, 105), "BRADY CNK", font=title_font, fill=(180, 120, 255, int(40 / (r/2))))
    t_draw.text((left_x, 105), "BRADY CNK", font=title_font, fill=(255, 255, 255, 255))

    # Subtitle: Full Stack Web Developer
    t_draw.text((left_x, 225), "Full Stack Web Developer & AI Solutions", font=subtitle_font, fill=(0, 229, 255, 255))

    # Glowing Cyan-to-Purple Neon Divider Bar
    line_y = 310
    line_len = 860
    # Gradient divider line
    for step in range(line_len):
        f = step / line_len
        # Cyan (0, 229, 255) to Purple (185, 95, 255)
        cr = int(0 * (1 - f) + 185 * f)
        cg = int(229 * (1 - f) + 95 * f)
        cb = int(255 * (1 - f) + 255 * f)
        t_draw.line([(left_x + step, line_y - 2), (left_x + step, line_y + 2)], fill=(cr, cg, cb, 255), width=4)
        # Glow
        t_draw.line([(left_x + step, line_y - 5), (left_x + step, line_y + 5)], fill=(cr, cg, cb, 40), width=10)

    # Vector Tech Stack Badges (HTML5, React, JS, GitHub)
    draw_vector_icons(t_draw, left_x, 355)

    # Contact Details with glowing icons
    items = [
        ("phone", "+58 414 955 5318", (0, 229, 255)),
        ("mail", "contacto@ingeniero.dev", (185, 95, 255)),
        ("pin", "Venezuela  •  Remoto Worldwide", (0, 229, 255)),
        ("web", "fullstack-zeta-lime.vercel.app", (0, 255, 170)),
    ]

    start_y = 485
    row_height = 95

    for i, (itype, text, col) in enumerate(items):
        cy = start_y + i * row_height
        box_size = 56
        ix, iy = left_x, cy + 2
        
        # Icon background pill
        t_draw.ellipse([ix - 3, iy - 3, ix + box_size + 3, iy + box_size + 3], fill=(col[0], col[1], col[2], 35))
        t_draw.ellipse([ix, iy, ix + box_size, iy + box_size], fill=(12, 22, 36, 230), outline=col, width=2)
        
        cx = ix + box_size // 2
        cy_icon = iy + box_size // 2
        
        if itype == "phone":
            # Phone icon
            t_draw.line([(cx - 8, cy_icon + 9), (cx + 8, cy_icon - 7)], fill=(255, 255, 255), width=5)
            t_draw.ellipse([cx - 12, cy_icon + 5, cx - 4, cy_icon + 13], fill=col)
            t_draw.ellipse([cx + 4, cy_icon - 11, cx + 12, cy_icon - 3], fill=col)
        elif itype == "mail":
            # Envelope icon
            t_draw.rounded_rectangle([cx - 14, cy_icon - 10, cx + 14, cy_icon + 10], radius=3, outline=(255, 255, 255), width=2)
            t_draw.line([(cx - 12, cy_icon - 8), (cx, cy_icon + 2), (cx + 12, cy_icon - 8)], fill=col, width=2)
        elif itype == "pin":
            # Map pin icon
            t_draw.ellipse([cx - 9, cy_icon - 12, cx + 9, cy_icon + 6], fill=col)
            t_draw.polygon([(cx - 8, cy_icon), (cx + 8, cy_icon), (cx, cy_icon + 14)], fill=col)
            t_draw.ellipse([cx - 4, cy_icon - 7, cx + 4, cy_icon + 1], fill=(12, 22, 36))
        elif itype == "web":
            # Globe icon
            t_draw.ellipse([cx - 13, cy_icon - 13, cx + 13, cy_icon + 13], outline=col, width=2)
            t_draw.ellipse([cx - 6, cy_icon - 13, cx + 6, cy_icon + 13], outline=(255, 255, 255), width=2)
            t_draw.line([(cx - 13, cy_icon), (cx + 13, cy_icon)], fill=(255, 255, 255), width=2)

        # Contact text
        tx = left_x + 85
        if itype == "web":
            t_draw.text((tx, cy + 6), text, font=url_font, fill=(0, 255, 170))
        else:
            t_draw.text((tx, cy + 8), text, font=contact_font, fill=(235, 240, 250))

    img.alpha_composite(text_layer)

    # 4. Generate 100% Scannable QR Code linking to https://fullstack-zeta-lime.vercel.app/
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=2,
    )
    qr.add_data("https://fullstack-zeta-lime.vercel.app/")
    qr.make(fit=True)

    # Glowing Cyan QR Matrix with high contrast dark background
    qr_img = qr.make_image(fill_color="#00E5FF", back_color="#060C14").convert("RGBA")
    
    qr_size = 370
    qr_img = qr_img.resize((qr_size, qr_size), Image.Resampling.NEAREST)

    qr_x = 1430
    qr_y = 650
    pad = 28
    box_rect = [qr_x - pad, qr_y - pad, qr_x + qr_size + pad, qr_y + qr_size + pad + 45]

    qr_box = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    q_draw = ImageDraw.Draw(qr_box)

    # Multi-color gradient glowing border (Cyan to Magenta)
    for g in range(16, 0, -2):
        q_draw.rounded_rectangle(
            [box_rect[0]-g, box_rect[1]-g, box_rect[2]+g, box_rect[3]+g],
            radius=30,
            outline=(0, 229, 255, int(35 / (g/2))),
            width=g
        )

    # Frame background & primary border
    q_draw.rounded_rectangle(box_rect, radius=24, fill=(6, 12, 20, 245), outline=(0, 229, 255, 255), width=4)

    # Gradient border overlay on bottom/right (Magenta/Purple)
    q_draw.line([(box_rect[2], box_rect[1] + 40), (box_rect[2], box_rect[3] - 20)], fill=(217, 70, 239), width=5)
    q_draw.line([(box_rect[0] + 40, box_rect[3]), (box_rect[2] - 20, box_rect[3])], fill=(217, 70, 239), width=5)

    # Corner brackets for cybernetic HUD effect
    c_len = 25
    q_draw.line([(box_rect[0], box_rect[1] + c_len), (box_rect[0], box_rect[1]), (box_rect[0] + c_len, box_rect[1])], fill=(0, 255, 170), width=6)
    q_draw.line([(box_rect[2], box_rect[3] - c_len), (box_rect[2], box_rect[3]), (box_rect[2] - c_len, box_rect[3])], fill=(217, 70, 239), width=6)

    # Scan Label
    lbl_font = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 22)
    label = "ESCANEA PARA VISITAR WEB"
    l_box = q_draw.textbbox((0, 0), label, font=lbl_font)
    lw = l_box[2] - l_box[0]
    q_draw.text((box_rect[0] + (box_rect[2] - box_rect[0] - lw) / 2, box_rect[3] - 38), label, font=lbl_font, fill=(0, 245, 200))

    img.alpha_composite(qr_box)
    img.paste(qr_img, (qr_x, qr_y), qr_img)

    # 5. Export Images
    pub_path = "E:/codex/fullstack/public/ficha_contacto.png"
    dl_path = "C:/Users/Pc/Downloads/ficha_contacto.png"
    art_path = "C:/Users/Pc/.gemini/antigravity-cli/brain/59dc9364-e824-4e16-8906-5d1584af343b/ficha_contacto.png"
    
    img.convert("RGB").save(pub_path, "PNG", quality=98)
    img.convert("RGB").save(dl_path, "PNG", quality=98)
    img.convert("RGB").save(art_path, "PNG", quality=98)
    
    print(f"Generated successfully!\n- {dl_path}")

if __name__ == "__main__":
    create_business_card()
