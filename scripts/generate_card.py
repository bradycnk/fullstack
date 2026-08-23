import os
import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def draw_service_badges(draw, base_x, base_y):
    services = [
        ("Páginas Web", (0, 229, 255)),
        ("Tiendas Online", (0, 255, 128)),
        ("Apps Móviles", (236, 72, 153)),
        ("Asistentes IA", (168, 85, 247)),
        ("Ventas Automáticas", (249, 115, 22)),
    ]
    
    font_badge = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 24)
    x = base_x
    y = base_y
    pad_x = 22
    badge_height = 50
    
    for label, col in services:
        bbox = draw.textbbox((0, 0), label, font=font_badge)
        text_w = bbox[2] - bbox[0]
        badge_w = text_w + pad_x * 2
        
        # Outer glow
        draw.rounded_rectangle([x-2, y-2, x+badge_w+2, y+badge_height+2], radius=16, fill=(col[0], col[1], col[2], 30))
        # Background box
        draw.rounded_rectangle([x, y, x+badge_w, y+badge_height], radius=14, fill=(12, 22, 34, 235), outline=col, width=2)
        # Text
        draw.text((x + pad_x, y + 10), label, font=font_badge, fill=(255, 255, 255))
        
        x += badge_w + 16

def draw_check_icon(draw, cx, cy, col):
    # Draw a clean vector circular checkmark icon
    draw.ellipse([cx - 14, cy - 14, cx + 14, cy + 14], fill=(col[0], col[1], col[2], 40), outline=col, width=2)
    # Checkmark ticks
    draw.line([(cx - 7, cy), (cx - 2, cy + 5), (cx + 7, cy - 5)], fill=col, width=3)

def create_business_card():
    width, height = 2000, 1200
    
    # 1. Base Canvas & Dark Gradient Background
    img = Image.new("RGBA", (width, height), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)
    
    for y in range(height):
        factor = y / height
        r = int(10 * (1 - factor) + 4 * factor)
        g = int(15 * (1 - factor) + 7 * factor)
        b = int(24 * (1 - factor) + 13 * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    # 2. Ambient Lighting Auras
    ambient = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    a_draw = ImageDraw.Draw(ambient)
    
    a_draw.ellipse([1250, -60, 2100, 750], fill=(0, 220, 255, 45))
    a_draw.ellipse([1350, 500, 2150, 1250], fill=(180, 80, 255, 55))
    a_draw.ellipse([1100, 250, 1850, 850], fill=(0, 255, 140, 30))
    
    ambient = ambient.filter(ImageFilter.GaussianBlur(130))
    img.alpha_composite(ambient)

    # 3. Circuit Board Decorative Lines (Right side)
    cyan = (0, 229, 255, 255)
    teal = (0, 245, 180, 255)
    purple = (185, 95, 255, 255)
    magenta = (235, 75, 215, 255)
    emerald = (0, 255, 110, 255)

    traces = [
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
        ([(1580, 160), (1490, 160), (1430, 220)], cyan, 3, True, True),
        ([(1620, 450), (1550, 450), (1490, 390)], teal, 3, True, True),
        ([(1700, 260), (1630, 260), (1570, 200)], purple, 3, True, True),
        ([(1480, 520), (1410, 520), (1350, 460)], emerald, 3, True, True),
        ([(1660, 600), (1590, 600), (1530, 540)], cyan, 3, True, True),
    ]

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

    # 4. Typography & Texts Designed for Direct Client Understanding
    title_font = ImageFont.truetype("C:/Windows/Fonts/bahnschrift.ttf", 94)
    subtitle_font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 44)
    motto_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 32)
    contact_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 38)
    contact_bold = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 38)
    url_font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 42)

    text_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    t_draw = ImageDraw.Draw(text_layer)
    
    left_x = 110

    # Name Title: BRADY CNK
    for r in range(12, 0, -3):
        t_draw.text((left_x, 90), "BRADY CNK", font=title_font, fill=(180, 120, 255, int(40 / (r/2))))
    t_draw.text((left_x, 90), "BRADY CNK", font=title_font, fill=(255, 255, 255, 255))

    # Clear Value Proposition Subtitle
    t_draw.text((left_x, 205), "Ingeniero de Software  •  Soluciones Digitales & IA", font=subtitle_font, fill=(0, 229, 255, 255))
    
    # Catchphrase for non-technical users
    t_draw.text((left_x, 260), "«Tú pones la idea, yo me encargo de todo lo técnico para hacerla realidad»", font=motto_font, fill=(200, 215, 230, 220))

    # Glowing Cyan-to-Purple Neon Divider Bar
    line_y = 320
    line_len = 1050
    for step in range(line_len):
        f = step / line_len
        cr = int(0 * (1 - f) + 185 * f)
        cg = int(229 * (1 - f) + 95 * f)
        cb = int(255 * (1 - f) + 255 * f)
        t_draw.line([(left_x + step, line_y - 2), (left_x + step, line_y + 2)], fill=(cr, cg, cb, 255), width=4)
        t_draw.line([(left_x + step, line_y - 5), (left_x + step, line_y + 5)], fill=(cr, cg, cb, 40), width=10)

    # 5. Service Badges (What you offer in plain Spanish)
    draw_service_badges(t_draw, left_x, 355)

    # 6. Contact Details with Updated Email
    items = [
        ("phone", "+58 414 955 5318", " (WhatsApp • Llamadas)", (0, 229, 255)),
        ("mail", "elsalvadorescristo777@gmail.com", " (Contacto Directo)", (185, 95, 255)),
        ("pin", "Venezuela  •  Atención a Clientes en Todo el Mundo", "", (0, 229, 255)),
        ("web", "fullstack-zeta-lime.vercel.app", "  (Portafolio Online)", (0, 255, 170)),
    ]

    start_y = 475
    row_height = 90

    for i, (itype, main_text, sub_text, col) in enumerate(items):
        cy = start_y + i * row_height
        box_size = 54
        ix, iy = left_x, cy + 2
        
        # Icon background pill
        t_draw.ellipse([ix - 3, iy - 3, ix + box_size + 3, iy + box_size + 3], fill=(col[0], col[1], col[2], 35))
        t_draw.ellipse([ix, iy, ix + box_size, iy + box_size], fill=(12, 22, 36, 230), outline=col, width=2)
        
        cx = ix + box_size // 2
        cy_icon = iy + box_size // 2
        
        if itype == "phone":
            t_draw.line([(cx - 8, cy_icon + 9), (cx + 8, cy_icon - 7)], fill=(255, 255, 255), width=5)
            t_draw.ellipse([cx - 12, cy_icon + 5, cx - 4, cy_icon + 13], fill=col)
            t_draw.ellipse([cx + 4, cy_icon - 11, cx + 12, cy_icon - 3], fill=col)
        elif itype == "mail":
            t_draw.rounded_rectangle([cx - 14, cy_icon - 10, cx + 14, cy_icon + 10], radius=3, outline=(255, 255, 255), width=2)
            t_draw.line([(cx - 12, cy_icon - 8), (cx, cy_icon + 2), (cx + 12, cy_icon - 8)], fill=col, width=2)
        elif itype == "pin":
            t_draw.ellipse([cx - 9, cy_icon - 12, cx + 9, cy_icon + 6], fill=col)
            t_draw.polygon([(cx - 8, cy_icon), (cx + 8, cy_icon), (cx, cy_icon + 14)], fill=col)
            t_draw.ellipse([cx - 4, cy_icon - 7, cx + 4, cy_icon + 1], fill=(12, 22, 36))
        elif itype == "web":
            t_draw.ellipse([cx - 13, cy_icon - 13, cx + 13, cy_icon + 13], outline=col, width=2)
            t_draw.ellipse([cx - 6, cy_icon - 13, cx + 6, cy_icon + 13], outline=(255, 255, 255), width=2)
            t_draw.line([(cx - 13, cy_icon), (cx + 13, cy_icon)], fill=(255, 255, 255), width=2)

        # Contact text
        tx = left_x + 82
        if itype == "web":
            t_draw.text((tx, cy + 6), main_text, font=url_font, fill=(0, 255, 170))
            if sub_text:
                bbox = t_draw.textbbox((0, 0), main_text, font=url_font)
                w_m = bbox[2] - bbox[0]
                t_draw.text((tx + w_m + 6, cy + 10), sub_text, font=contact_font, fill=(160, 180, 200))
        else:
            t_draw.text((tx, cy + 8), main_text, font=contact_bold, fill=(240, 245, 255))
            if sub_text:
                bbox = t_draw.textbbox((0, 0), main_text, font=contact_bold)
                w_m = bbox[2] - bbox[0]
                t_draw.text((tx + w_m + 6, cy + 8), sub_text, font=contact_font, fill=(160, 180, 200))

    # 7. Trust & Guarantee Box at bottom-left
    trust_y = 865
    t_box_w = 1100
    t_draw.rounded_rectangle([left_x, trust_y, left_x + t_box_w, trust_y + 120], radius=18, fill=(10, 20, 32, 210), outline=(0, 229, 255, 90), width=1)
    
    trust_title_font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 28)
    trust_sub_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 24)
    
    # Left Benefit Item
    col1_x = left_x + 35
    draw_check_icon(t_draw, col1_x + 12, trust_y + 35, (0, 255, 170))
    t_draw.text((col1_x + 40, trust_y + 20), "Sin complicaciones técnicas", font=trust_title_font, fill=(0, 255, 170))
    t_draw.text((col1_x + 40, trust_y + 60), "Explicaciones claras y soporte completo.", font=trust_sub_font, fill=(185, 200, 215))

    # Right Benefit Item
    col2_x = left_x + 580
    draw_check_icon(t_draw, col2_x + 12, trust_y + 35, (0, 229, 255))
    t_draw.text((col2_x + 40, trust_y + 20), "Consulta y Asesoría Gratuita", font=trust_title_font, fill=(0, 229, 255))
    t_draw.text((col2_x + 40, trust_y + 60), "Presupuesto a medida sin compromiso.", font=trust_sub_font, fill=(185, 200, 215))

    img.alpha_composite(text_layer)

    # 8. High-Precision Scannable QR Code linking to https://fullstack-zeta-lime.vercel.app/
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=2,
    )
    qr.add_data("https://fullstack-zeta-lime.vercel.app/")
    qr.make(fit=True)

    qr_img = qr.make_image(fill_color="#00E5FF", back_color="#060C14").convert("RGBA")
    
    qr_size = 370
    qr_img = qr_img.resize((qr_size, qr_size), Image.Resampling.NEAREST)

    qr_x = 1430
    qr_y = 620
    pad = 28
    box_rect = [qr_x - pad, qr_y - pad, qr_x + qr_size + pad, qr_y + qr_size + pad + 75]

    qr_box = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    q_draw = ImageDraw.Draw(qr_box)

    for g in range(16, 0, -2):
        q_draw.rounded_rectangle(
            [box_rect[0]-g, box_rect[1]-g, box_rect[2]+g, box_rect[3]+g],
            radius=30,
            outline=(0, 229, 255, int(35 / (g/2))),
            width=g
        )

    q_draw.rounded_rectangle(box_rect, radius=24, fill=(6, 12, 20, 245), outline=(0, 229, 255, 255), width=4)

    q_draw.line([(box_rect[2], box_rect[1] + 40), (box_rect[2], box_rect[3] - 20)], fill=(217, 70, 239), width=5)
    q_draw.line([(box_rect[0] + 40, box_rect[3]), (box_rect[2] - 20, box_rect[3])], fill=(217, 70, 239), width=5)

    c_len = 25
    q_draw.line([(box_rect[0], box_rect[1] + c_len), (box_rect[0], box_rect[1]), (box_rect[0] + c_len, box_rect[1])], fill=(0, 255, 170), width=6)
    q_draw.line([(box_rect[2], box_rect[3] - c_len), (box_rect[2], box_rect[3]), (box_rect[2] - c_len, box_rect[3])], fill=(217, 70, 239), width=6)

    lbl_font_bold = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 24)
    lbl_font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 20)
    
    label1 = "ESCANEA CON TU CELULAR"
    label2 = "Para ver la página web y servicios"
    
    l1_box = q_draw.textbbox((0, 0), label1, font=lbl_font_bold)
    l1_w = l1_box[2] - l1_box[0]
    q_draw.text((box_rect[0] + (box_rect[2] - box_rect[0] - l1_w) / 2, box_rect[3] - 68), label1, font=lbl_font_bold, fill=(0, 255, 200))

    l2_box = q_draw.textbbox((0, 0), label2, font=lbl_font_sub)
    l2_w = l2_box[2] - l2_box[0]
    q_draw.text((box_rect[0] + (box_rect[2] - box_rect[0] - l2_w) / 2, box_rect[3] - 34), label2, font=lbl_font_sub, fill=(180, 200, 220))

    img.alpha_composite(qr_box)
    img.paste(qr_img, (qr_x, qr_y), qr_img)

    # 9. Export Images
    pub_path = "E:/codex/fullstack/public/ficha_contacto.png"
    dl_path = "C:/Users/Pc/Downloads/ficha_contacto.png"
    art_path = "C:/Users/Pc/.gemini/antigravity-cli/brain/59dc9364-e824-4e16-8906-5d1584af343b/ficha_contacto.png"
    
    img.convert("RGB").save(pub_path, "PNG", quality=98)
    img.convert("RGB").save(dl_path, "PNG", quality=98)
    img.convert("RGB").save(art_path, "PNG", quality=98)
    
    print(f"Card generated successfully!\n- {dl_path}")

if __name__ == "__main__":
    create_business_card()
